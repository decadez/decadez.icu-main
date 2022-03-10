import * as React from 'react';
import { useRouter } from 'next/router';
import { repoUrl } from 'constants/index';
import { IconStar } from 'components/Icon/IconStar';

export function Feedback({ onSubmit = () => {} }: { onSubmit?: () => void }) {
  const { pathname } = useRouter();
  return <SendFeedback key={pathname} onSubmit={onSubmit} />;
}

function SendFeedback({ onSubmit }: { onSubmit: () => void }) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isFeedBackShow, setIsFeedBackShow] = React.useState(false);
  const loadRef = React.useRef<any>();
  const feedBackEndRef = React.useRef<any>();

  React.useEffect(() => {
    if (!window.localStorage.getItem('handled')) {
      setIsFeedBackShow(true);
    }
    return () => {
      clearTimeout(loadRef.current);
      clearTimeout(feedBackEndRef.current);
    };
  }, []);

  return (
    isFeedBackShow ?
    <div className="max-w-xs w-80 lg:w-auto py-3 shadow-lg rounded-lg m-4 bg-wash dark:bg-gray-95 px-4 flex">
      <p className="w-full font-bold text-primary dark:text-primary-dark text-lg">
        {isSubmitted
          ? '感谢您的小星星！！🙏 🙏 🙏'
          : '这就去交友网站点小星星！'}
      </p>
      {!isSubmitted && (
        <button
          aria-label="Yes"
          className="bg-secondary-button dark:bg-secondary-button-dark rounded-lg text-primary dark:text-primary-dark px-3 mr-2"
          onClick={() => {
            window.open(repoUrl, '_blank');
            setIsSubmitting(true);
            loadRef.current = setTimeout(() => {
              setIsSubmitted(true);
              setIsSubmitting(false);
              feedBackEndRef.current = setTimeout(() => {
                setIsFeedBackShow(false);
                window.localStorage.setItem('handled', 'true');
              }, 2000);
            }, 4000);
            onSubmit();
          }}>
          {<IconStar className={isSubmitting ? 'animate-spin' : ''} />}
        </button>
      )}
    </div> : <></>
  );
}
