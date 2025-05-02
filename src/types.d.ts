export interface ImageEvent extends React.MouseEvent<HTMLImageElement> {
    preventDefault: () => void;
}
 export interface GaleryItem {
    id: number
    title: string
    description: string
    image: string
    created_at: string
}