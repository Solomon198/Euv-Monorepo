import { fireEvent, customRender, type RenderResult } from 'libs/utils/testing'
import TestButton, { type IButton } from '.'

const defaultProps: IButton = {
    text: 'Button Component',
    onClick: jest.fn(),
}

const getComponent = (defaultProps: IButton): RenderResult =>
    customRender(<TestButton {...defaultProps} />)

describe('Button', (): void => {
    it('Renders', (): void => {
        const { container } = getComponent(defaultProps)
        expect(container).toBeInstanceOf(HTMLElement)
    })

    it('Displays children as text', (): void => {
        const { container } = getComponent(defaultProps)
        expect(container).toHaveTextContent('Button Component')
    })

    it('Calls onClick function', (): void => {
        const { getByRole } = getComponent(defaultProps)
        fireEvent.click(getByRole('button', { name: defaultProps.text }))
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })
})
