declare namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'enable-pan'?: boolean;
        'tone-mapping'?: string;
        poster?: string;
        'shadow-intensity'?: string;
        style?: React.CSSProperties;
        'environment-image'?: string;
        'touch-action'?: string;
      }, HTMLElement>;
    }
  }
