
interface IInputLoginProps {
    label: string;
    value: string;
    type: string;

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;

}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    return (
        <label>
            <span>{props.label}</span>
            <input
                value={props.value}
                type={props.type}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key == 'Enter' ? props.onPressEnter : undefined}
             />
        </label>

    )
}