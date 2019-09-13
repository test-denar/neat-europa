import React from 'react';
import _ from 'lodash';

import Contact from './Contact';
import {Link, toUrl, safePrefix, htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="inner">
                    {_.get(this.props, 'pageContext.frontmatter.show_contact') && 
                        <Contact {...this.props} />
                    }
                    <footer id="footer">
                        <section class="links">
                            {_.get(this.props, 'pageContext.site.data.footer.links_col1') && 
                                <div>
                                    <h3>{_.get(this.props, 'pageContext.site.data.footer.links_col1.title')}</h3>
                                    <ul class="plain">
                                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links_col1.links'), (item, item_idx) => (
                                            <li key={item_idx}><Link class="footerLink" to={safePrefix(toUrl(this.props.pageContext.pages, _.get(item, 'link')))}>{_.get(item, 'text')}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            {_.get(this.props, 'pageContext.site.data.footer.links_col2') && 
                                <div>
                                    <h3>{_.get(this.props, 'pageContext.site.data.footer.links_col2.title')}</h3>
                                    <ul class="plain">
                                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links_col2.links'), (item, item_idx) => (
                                            <li key={item_idx}><Link class="footerLink" to={safePrefix(toUrl(this.props.pageContext.pages, _.get(item, 'link')))}>{_.get(item, 'text')}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            {_.get(this.props, 'pageContext.site.data.footer.links_col3') && 
                                <div>
                                    <h3>{_.get(this.props, 'pageContext.site.data.footer.links_col3.title')}</h3>
                                    <ul class="plain">
                                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links_col3.links'), (item, item_idx) => (
                                            <li key={item_idx}><Link class="footerLink" to={safePrefix(toUrl(this.props.pageContext.pages, _.get(item, 'link')))}>{_.get(item, 'text')}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            }
                            {_.get(this.props, 'pageContext.site.data.footer.links_col4') && 
                                <div>
                                    <h3>{_.get(this.props, 'pageContext.site.data.footer.links_col4.title')}</h3>
                                    <ul class="plain">
                                        {_.map(_.get(this.props, 'pageContext.site.data.footer.links_col4.links'), (item, item_idx) => (
                                            <li key={item_idx}><Link class="footerLink" to={safePrefix(toUrl(this.props.pageContext.pages, _.get(item, 'link')))}>{_.get(item, 'text')}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </section>
                        {_.get(this.props, 'pageContext.site.data.footer.social_links') && 
                            <ul class="contact-icons">
                                {_.map(_.get(this.props, 'pageContext.site.data.footer.social_links'), (item, item_idx) => (
                                    _.get(item, 'link') ? 
                                        <li key={item_idx} class={'icon ' + _.get(item, 'icon')}><Link to={_.get(item, 'link')}>{_.get(item, 'text')}</Link></li>
                                     : 
                                        <li key={item_idx} class={'icon ' + _.get(item, 'icon')}>{_.get(item, 'text')}</li>
                                ))}
                            </ul>
                        }
                        {_.get(this.props, 'pageContext.site.data.footer.copyright') && 
                            <p class="copyright">
                                {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                                &nbsp;
                                {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                                    <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                                </React.Fragment>))}
                            </p>
                        }
                    </footer>
                </div>
            </div>
        );
    }
}
