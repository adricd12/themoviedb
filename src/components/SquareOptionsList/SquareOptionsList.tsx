import styles from './styles.module.scss';

const {
    itemsContainer,
    item,
    selected,
} = styles;

export interface SquareOptions {
    option: string;
    value: string;
}

interface SquareOptionsListProps {
    options: SquareOptions[];
    selectedOption?: string;
    handleClickOption?: (value: any) => void;
}

const SquareOptionsList: React.FC<SquareOptionsListProps> = ({
    options,
    selectedOption = '',
    handleClickOption = () => {}
}) => {
    return (
        <div className={itemsContainer} data-testid='items-container'>
            {
                options.map((option, index) => (
                    <div key={index} data-testid={`item-${option.value}`}
                        className={selectedOption === option.value ? `${item} ${selected}` : item}
                        onClick={() => handleClickOption(option.value)}>
                            {option.option}
                    </div>
                ))
            }
        </div>
    )
}

export default SquareOptionsList;