/* eslint-disable react/prop-types */
import { useEffect, useRef, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  variableSpeed,
  reverseMode = false,
  ...props
}) => {
  const textSpanRef = useRef(null);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  // Cursor blink — driven by GSAP, no React state.
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;
    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
    return () => {
      tween.kill();
    };
  }, [showCursor, cursorBlinkDuration]);

  // Typing engine — writes directly to textContent, no React reconciliation per character.
  useEffect(() => {
    let cancelled = false;
    let timer = null;

    const textEl = textSpanRef.current;
    if (!textEl) return () => {};

    const speedFor = () => (variableSpeed ? getRandomSpeed() : typingSpeed);
    const isVisible = () => {
      if (cancelled) return false;
      if (typeof IntersectionObserver === 'undefined') return true;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return true;
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const run = (i) => {
      if (cancelled || !isVisible()) return;
      // index i encodes (textIndex, charIndex, phase):
      //   phase 0 = typing, 1 = pausing before delete, 2 = deleting
      let [textIndex, charIndex, phase] = i;

      const currentText = reverseMode
        ? textArray[textIndex].split('').reverse().join('')
        : textArray[textIndex];

      if (phase === 0) {
        // Typing
        if (charIndex <= currentText.length) {
          textEl.textContent = currentText.slice(0, charIndex);
          if (charIndex === currentText.length) {
            // Done typing — pause, then move to delete phase (or next text)
            timer = setTimeout(() => {
              if (cancelled) return;
              if (!loop && textIndex === textArray.length - 1) return;
              run([textIndex, charIndex, 2]);
            }, pauseDuration);
            return;
          }
          timer = setTimeout(() => run([textIndex, charIndex + 1, 0]), speedFor());
        }
      } else if (phase === 2) {
        // Deleting
        if (charIndex > 0) {
          textEl.textContent = currentText.slice(0, charIndex - 1);
          timer = setTimeout(() => run([textIndex, charIndex - 1, 2]), deletingSpeed);
        } else {
          // Done deleting — advance to next string
          const nextIndex = (textIndex + 1) % textArray.length;
          if (!loop && textIndex === textArray.length - 1) return;
          timer = setTimeout(() => run([nextIndex, 0, 0]), pauseDuration);
        }
      }
    };

    // Start after initialDelay, then begin typing from index 0.
    timer = setTimeout(() => run([0, 0, 0]), initialDelay);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textArray, typingSpeed, deletingSpeed, pauseDuration, loop, initialDelay, reverseMode, variableSpeed]);

  return (
    <Component
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}
      {...props}
    >
      <span ref={textSpanRef} className="inline" />
      {showCursor && (
        <span
          ref={cursorRef}
          className={`ml-1 inline-block opacity-100 ${hideCursorWhileTyping ? 'invisible' : ''} ${cursorClassName}`}
          aria-hidden
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

export default TextType;
