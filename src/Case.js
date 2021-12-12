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
import React, {Component} from "react";

import styles from './Case.module.css'

class Case extends Component {
    getType() {
        let tpe = this.props.caze.tpe
        if (tpe === "Unit") {
            return undefined
        }
        tpe = (tpe[0]) === '(' ? tpe.substr(1) : tpe
        tpe = (tpe[tpe.length - 1]) === ')' ? tpe.slice(0, -1) : tpe
        return <span>(<span className="type">{tpe}</span>)</span>
    }

    render() {
        return <div key={this.props.caze.tag} className={styles.caze}>
            <span className="keyword">case</span>
            <span className={styles.tag}>{this.props.caze.tag}</span>
            {this.getType()}
        </div>
    }
}

export default Case
