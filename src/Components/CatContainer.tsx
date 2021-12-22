export interface CatContainerProps {
  imageSource: string;
  alternateText: string;
  imageDidLoad: () => void;
}

const CatContainer = ({
  imageSource,
  alternateText,
  imageDidLoad,
}: CatContainerProps) => {
  return (
    <div>
      <img
        src={`https://cataas.com/${imageSource}`}
        alt={alternateText}
        onLoad={imageDidLoad}
      />
    </div>
  );
};

export default CatContainer;
