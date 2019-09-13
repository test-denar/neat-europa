import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class Contact extends React.Component {
    render() {
        return (
            <section class="main accent2">
                <header class="major">
                    <h2>{_.get(this.props, 'pageContext.site.data.footer.contact.title')}</h2>
                    {markdownify(_.get(this.props, 'pageContext.site.data.footer.contact.subtitle'))}
                </header>
                <form method="post" action="#" class="combined">
                    <input type="email" name="email" id="email" placeholder="Email address" class="invert" />
                    <input type="submit" class="primary" value="Sign Up" />
                </form>
            </section>
        );
    }
}
