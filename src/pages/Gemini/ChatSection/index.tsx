import { useMemo, useState, type KeyboardEvent } from 'react';
import { SendOutlined, UserOutlined } from '@ant-design/icons';

import type { Chat } from '../utils';
import { geminiChatDemo, geminiChatSectionCopy } from './consts';
import { requestGeminiChatReply } from './requestGeminiChatReply';
import { chatSectionClassName } from './styles';

const assistantTwinSrc = '/images/twin.png';
const heroImageSrc = '/images/gemini-ai-chat-hero.png';

export const GeminiChatSection = () => {
  const [entries, setEntries] = useState<Chat>(() => [...geminiChatDemo]);
  const [draft, setDraft] = useState('');

  const awaitingReply = useMemo(() => entries.some((entry) => entry.answer === null), [entries]);

  const sendMessage = async () => {
    const question = draft.trim();
    if (!question || awaitingReply) {
      return;
    }
    const id = crypto.randomUUID();
    setDraft('');
    setEntries((prev) => [...prev, { id, question, answer: null }]);

    try {
      const answer = await requestGeminiChatReply(question);
      setEntries((prev) => prev.map((entry) => (entry.id === id ? { ...entry, answer } : entry)));
    } catch {
      setEntries((prev) =>
        prev.map((entry) => (entry.id === id ? { ...entry, answer: geminiChatSectionCopy.errorReply } : entry))
      );
    }
  };

  const onComposerKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      void sendMessage();
    }
  };

  const heroClassName = awaitingReply ? 'gemini-chat__hero gemini-chat__hero--loading' : 'gemini-chat__hero';

  return (
    <section
      className={chatSectionClassName}
      aria-labelledby="gemini-chat-heading"
      aria-busy={awaitingReply}
    >
      <div className="gemini-chat__layout">
        <div className="gemini-chat__panel">
          <div className="gemini-chat__header">
            <h2 id="gemini-chat-heading" className="gemini-chat__title">
              {geminiChatSectionCopy.title}
            </h2>
            <p className="gemini-chat__description">{geminiChatSectionCopy.description}</p>
          </div>

          <div className="gemini-chat__thread" role="log" aria-live="polite">
            {entries.map((entry) => (
              <div className="gemini-chat__exchange" key={entry.id}>
                <div className="gemini-chat__row gemini-chat__row--user">
                  <span className="gemini-chat__avatar gemini-chat__avatar--user" aria-hidden>
                    <UserOutlined />
                  </span>
                  <div className="gemini-chat__bubble gemini-chat__bubble--user">{entry.question}</div>
                </div>
                <div className="gemini-chat__row gemini-chat__row--assistant">
                  <span className="gemini-chat__avatar gemini-chat__avatar--assistant" aria-hidden>
                    <img className="gemini-chat__avatar-twin" src={assistantTwinSrc} alt="" />
                  </span>
                  <div
                    className={
                      entry.answer === null
                        ? 'gemini-chat__bubble gemini-chat__bubble--assistant gemini-chat__bubble--pending'
                        : 'gemini-chat__bubble gemini-chat__bubble--assistant'
                    }
                  >
                    {entry.answer === null
                      ? geminiChatSectionCopy.assistantLoadingLabel
                      : entry.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gemini-chat__composer">
            <input
              className="gemini-chat__input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={onComposerKeyDown}
              placeholder={geminiChatSectionCopy.inputPlaceholder}
              aria-label={geminiChatSectionCopy.inputPlaceholder}
              disabled={awaitingReply}
            />
            <button
              className="gemini-chat__send"
              type="button"
              onClick={() => void sendMessage()}
              aria-label="Send message"
              disabled={awaitingReply}
            >
              <SendOutlined />
            </button>
          </div>
        </div>

        <div className="gemini-chat__visual" aria-hidden>
          <img className={heroClassName} src={heroImageSrc} alt="" />
        </div>
      </div>
    </section>
  );
};
