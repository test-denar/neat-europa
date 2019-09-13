import React from 'react';
import _ from 'lodash';

import {getPages, safePrefix, Link, markdownify} from '../utils';

export default class Carousel extends React.Component {
    render() {
        return (
            <section id="carousel" class={'carousel ' + _.get(this.props, 'section.background_accent_color')}>
                {_.map(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/'), ['frontmatter.home_sections.carousel.enabled', true]), 'frontmatter.home_sections.carousel.weight'), (page, page_idx) => (
                    <article key={page_idx}>
                        <div class="image"><img src={safePrefix(_.get(page, 'frontmatter.home_sections.carousel.image.url'))} alt="" data-position={_.get(page, 'frontmatter.home_sections.carousel.image.data_position')} /></div>
                        <div class="content">
                            <Link to={_.get(page, 'url')}><h3>{_.get(page, 'frontmatter.home_sections.carousel.title')}</h3></Link>
                            {markdownify(_.get(page, 'frontmatter.home_sections.carousel.subtitle'))}
                        </div>
                    </article>
                ))}
                <nav>
                    <Link to="#" class="previous"><span class="label">Previous</span></Link>
                    <Link to="#" class="next"><span class="label">Next</span></Link>
                </nav>
            </section>
        );
    }
}
