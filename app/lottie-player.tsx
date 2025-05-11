// components/LottiePlayer.tsx
"use client";

import { useLottie } from "lottie-react";
import React from "react";

type LottiePlayerProps = {
  className?: string;
  animationJson?: any;
};

const LottiePlayer: React.FC<LottiePlayerProps> = ({
  className = "w-[4rem]",
  animationJson,
}) => {
  const options = {
    animationData: JSON.parse(JSON.stringify(animationJson)),
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className={className}>{View}</div>;
};

export default LottiePlayer;