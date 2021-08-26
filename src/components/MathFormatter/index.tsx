import { MathJax, MathJaxContext } from "better-react-mathjax";

interface MathFormatterProps {
  mathCode: string;
}

export function MathFormatter({ mathCode }: MathFormatterProps) {

  const config = {
    loader: { load: ["input/asciimath"] }
  };

  return (
    <MathJaxContext config={config}>
      <MathJax>{`\`${mathCode}\``}</MathJax>
    </MathJaxContext>
  )
}