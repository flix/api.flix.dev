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
import React, {Component} from 'react';
import SourceLocation from "./SourceLocation";

import {getClassNames, getFormattedTypeParams} from "./Utils";
import Case from "./Case";

class Enum extends Component {
    render() {
        return <div className={getClassNames("box", this.props.activeRef, this.props.decl)}
                    ref={this.props.decl.reactRef}>
            <span className="line">
                <span className="keyword">enum</span>
                <span className="name">{this.props.decl.sym.name}</span>
                <span>{getFormattedTypeParams(this.props.decl.tparams)}</span>
            </span>
            <SourceLocation loc={this.props.decl.loc}/>
            <hr/>
            <div>
                {this.props.decl.cases.map(caze => <Case key={caze.tag} caze={caze}/>)}
            </div>
        </div>
    }
}

export default Enum
