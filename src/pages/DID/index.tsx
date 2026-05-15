import { useRef, useState } from 'react';
import { Card, Input, Space, Button, InputRef } from 'antd';

import { pageContainerClassName } from './styles';
import { generateVideo } from './utils';

export const DIDPage = () => {

  const promptRef = useRef<InputRef>(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleClick = async () => {
    const text = promptRef.current?.input?.value || "";
    const video = await generateVideo(text);
    setVideoUrl(video || "");
  };

  return (
    <Space direction="vertical" size={24} className={pageContainerClassName}>

      <Card>
        <Input type="text" ref={promptRef} placeholder={'Enter prompt here...'} />
        <Button type="primary" onClick={handleClick}>Submit</Button>
      </Card>

      <video width="500" controls autoPlay>
        <source src="/twin.mp4" type="video/mp4" />
      </video>
    </Space>
  );
};
