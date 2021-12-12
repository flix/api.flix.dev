/*
 * Copyright 2021 Magnus Madsen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import styles from './SourceLocation.module.css'

import React, {Component} from 'react';
import {Badge} from "reactstrap";

class SourceLocation extends Component {

    getLink() {
        let prefix = "https://github.com/flix/flix/blob/master/main/src/library/"

        let name = this.props.loc.name
        let beginLine = this.props.loc.beginLine
        let endLine = this.props.loc.endLine

        let url = prefix + name + "#L" + beginLine + "-L" + endLine;
        return <a href={url} className="link-dark">Source</a>
    }

    render() {
        return <Badge color="light" className={styles.sourceLocation}>{this.getLink()}</Badge>
    }

}

export default SourceLocation
