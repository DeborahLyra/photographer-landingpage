export interface ImageEvent extends React.MouseEvent<HTMLImageElement> {
    preventDefault: () => void;
}
