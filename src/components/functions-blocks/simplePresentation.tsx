import {a11yLight, CodeBlock} from 'react-code-blocks';

type SimplePresentationParams = {
    title: string,
    func: object
}

export function SimplePresentation({title, func}: SimplePresentationParams): JSX.Element {
    return (
        <div>
            <h1>{title}</h1>
            <CodeBlock
                theme={a11yLight}
                language={'JavaScript'}
                text={func.toString()}
            />
        </div>
    )
}
