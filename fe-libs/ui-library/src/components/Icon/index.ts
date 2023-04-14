import { createIconContext } from '../../libs/components/Icon'
import * as DefaultIcons from '../../libs/components/Icon/defaultIconImport.unicorn'

const IconContext = createIconContext({ icons: DefaultIcons })

export const Icon = IconContext.Icon
export const IconProvider = IconContext.Provider
