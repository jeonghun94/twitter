import React from "react";
import useSWR from "swr";

interface IProps {
  url: string;
  isLiked: boolean;
}

export default () => {
  const { data, mutate } = useSWR<IProps>(
    "https://dogs-api.nomadcoders.workers.dev"
  );

  const handleClick = (isLike?: string) => {
    if (!data) return;
    isLike ? mutate({ ...data, isLiked: !data.isLiked }, false) : mutate();
  };

  return (
    <div className="container">
      <video
        src={data?.url}
        autoPlay={true}
        controls={true}
        loop={true}
      ></video>

      <div className="button-container">
        <button className="dog" onClick={() => handleClick()}>
          New Dog!
        </button>
        <button className="like" onClick={() => handleClick("like")}>
          {!data?.isLiked ? "Like" : "Unlike"}
        </button>
      </div>
      <style jsx>{`
        .container {
          max-width: 600px;
          height: 100vh;
          gap: 20px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        video {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: cover;
          border-radius: 3px;
          margin-top: 20px;
        }

        .button-container {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
        }

        button {
          border: 0;
          width: 100%;
          padding: 15px 30px;
          border-radius: 3px;
          cursor: pointer;
          font-size: 1rem;

          &:hover {
            opacity: 0.8;
          }
        }
        .dog {
        }

        .like {
          background: #0099ff;
          color: white;
        }
      `}</style>
    </div>
  );
};
