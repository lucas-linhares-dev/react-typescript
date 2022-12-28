
import React from "react";

interface IInputLoginProps {
    label: string;
    value: string;
    type: string;

    onChange: (newValue: string) => void;
    onPressEnter?: () => void;

}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps> (({label, value, type, onChange, onPressEnter}, ref) => {
    return (
        <label>
            <span>{label}</span>
            <input
                ref={ref}
                value={value}
                type={type}
                onChange={e => onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? onPressEnter && onPressEnter() : undefined}
             />
        </label>

    )
});