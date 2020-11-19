import React, {Fragment} from 'react';
import InputField from "./InputField";
import InputCommand from "./InputCommand";

const LocalLoginContainer: React.FC<{
    inputs: {
        name: string,
        type: 'text' | 'password',
        error?: string,
        onValidate?: (target: HTMLInputElement, value: any) => boolean | undefined
    }[],
    commands: {
        name: string,
        type: 'submit' | 'reset',
        error?:string,
        onExecute?: (value: any) => void
    }[]
}> = ({inputs,commands}) => (
    <Fragment>
        {inputs.map((i, ix) =>
            (
                <InputField
                    key={ix}
                    name={i.name}
                    type={i.type}
                    error={i.error}
                    // @ts-ignore
                    onValidate={(t, v) => {
                        return i.onValidate?.call(null, t, v);
                    }}
                />))}
        {commands.map((c, ix) => (
            <InputCommand
                key={ix}
                name={c.name}
                type={c.type}
                // @ts-ignore
                onExecute={(v) => c.onExecute?.call(null, v)}
            />
        ))
        }
    </Fragment>
);

export default LocalLoginContainer;
