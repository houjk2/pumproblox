import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute min-w-full min-h-full object-cover"
      >
        <source
          src="https://d3v55qvjb2v012.cloudfront.net/g9Qq/2025/02/22/18/36/cTn3FznhN4v/sc.mp4?srcid=cTn3FznhN4v&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kM3Y1NXF2amIydjAxMi5jbG91ZGZyb250Lm5ldC9nOVFxLzIwMjUvMDIvMjIvMTgvMzYvY1RuM0Z6bmhONHYvc2MubXA0P3NyY2lkPWNUbjNGem5oTjR2IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzQwMzM1OTk5fX19XX0_&Signature=ToPBFzTqtKg0MnGpFnSPEKS0b1-wQDDFXxRYf0aXJYT7sJ8-0~JD5dSSHswdN5h-AnODc9hNcI1OhkzJRe1gmnt6r24hgFgwIdSdbUrcKZX72pp1ekrWY0B0gUkzZQZUJ25fnVyv5U7NMU8MHBBfYC0Xw7na6~pT00Lb~cGfKoA_&Key-Pair-Id=APKAI4E2RN57D46ONMEQ"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;