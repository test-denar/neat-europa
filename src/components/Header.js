import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from './Menu';
import Banner from './Banner';

export default class Header extends React.Component {
    render() {
        return (
            <div class="wrapper"> 
                <div class="inner">
                    <header id="header">
                        <Link id="logo" to={safePrefix('/')} class="logo">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link>
                        <nav>
                            <ul>
                                <li><Link to="#menu">Menu</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <Menu {...this.props} />
                    {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') && 
                        <Banner {...this.props} />
                    }
                </div>
            </div>
        );
    }
}
