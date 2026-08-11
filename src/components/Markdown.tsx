'use client';

import type { MDXComponents, MDXContent } from "mdx/types";

const Markdown = ({ MDX, components }: {
    MDX: MDXContent,
    components?: MDXComponents
}) => {
    return (
        <article className="leading-normal">
            <MDX components={components} />
        </article>
    )
}

export default Markdown;