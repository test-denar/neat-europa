import React from 'react';
import _ from 'lodash';

import {markdownify, getPages, safePrefix, Link} from '../utils';

export default class Spotlight extends React.Component {
    render() {
        return (
            <section class="main">
                <header class="major">
                    <h2>{_.get(this.props, 'section.title')}</h2>
                    {markdownify(_.get(this.props, 'section.subtitle'))}
                </header>
                <div class="spotlights">
                    {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_sections.spotlight.enabled', true]), 'frontmatter.home_sections.spotlight.weight'), (page, page_idx) => (
                        <article key={page_idx}>
                            <div class="image"><img src={safePrefix(_.get(page, 'frontmatter.home_sections.spotlight.image.url'))} alt="" data-position={_.get(page, 'frontmatter.home_sections.spotlight.image.data_position')} /></div>
                            <div class="content">
                                <h3>{_.get(page, 'frontmatter.home_sections.spotlight.title')}</h3>
                                <p>{_.get(page, 'frontmatter.home_sections.spotlight.excerpt')}</p>
                                <ul class="actions special">
                                    <li><Link to={safePrefix(_.get(page, 'url'))} class="button primary">More</Link></li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        );
    }
}
