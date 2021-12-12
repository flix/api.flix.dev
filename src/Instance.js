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

import styles from './Instance.module.css'

import React, {Component} from "react";
import SourceLocation from "./SourceLocation";
import {getTypeConstraints} from "./Utils";

class Instance extends Component {

    render() {
        return <div className={styles.instance}>
            <span className="keyword">instance</span>
            <span className="type">{this.props.inst.tpe}</span>
            <span> </span>
            {getTypeConstraints(this.props.inst.tcs)}
            <SourceLocation loc={this.props.inst.loc}/>
        </div>
    }
}

export default Instance
