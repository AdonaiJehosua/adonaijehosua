import {SimplePresentation} from '@/components/functions-blocks/simplePresentation';

export function JsNinja(): JSX.Element {
    return (
        <SimplePresentation
            title={'Test'}
            func={() => 'test'}
        />
    )
}
