import { Giscus } from '@giscus/react'
import { FC } from 'react'

type GiscusComponentProps = {
    theme : "light" | "dark"
}

const GiscusComponent: FC<GiscusComponentProps> = ({ theme }) => {
    return (
        <Giscus
            repo="0xJk/kweb"
            repoId="R_kgDOKTv62g"
            category="General"
            categoryId="DIC_kwDOKTv62s4CZU48"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            theme={ theme }
        />
    )
}

export default GiscusComponent