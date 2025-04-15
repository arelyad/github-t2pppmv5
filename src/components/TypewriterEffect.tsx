import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === texts[currentTextIndex]) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
        setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((current) => (current + 1) % texts.length);
          return;
        }
        setCurrentText(currentText.slice(0, -1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className="min-h-[1em]">
      <span className="inline-block">{currentText}</span>
      <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-1">|</span>
    </div>
  );
};

export default TypewriterEffect;