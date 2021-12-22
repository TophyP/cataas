export interface CatContainerProps {
  imageSource: string;
  alternateText: string;
}

const CatContainer = ({ imageSource, alternateText }: CatContainerProps) => {
  return (
    <div>
      <img src={`https://cataas.com/${imageSource}`} alt={alternateText} />
    </div>
  );
};

export default CatContainer;
