import React from 'react';

export type WorkflowCardProps = {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  children: React.ReactNode;
};

export default function WorkflowCard({
  img,
  title,
  children,
}: WorkflowCardProps) {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
