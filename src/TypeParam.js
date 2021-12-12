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
import React, {Component, Fragment} from "react";

class TypeParam extends Component {

    getKind() {
        if (this.props.withKind === false) {
            return undefined
        }
        return <Fragment>
            <span> : </span> <span className="kind">{this.props.tparam.kind}</span>
        </Fragment>
    }

    render() {
        return <span className="tparam">
           <span className="type">{this.props.tparam.name}</span>
            {this.getKind()}
        </span>
    }
}

export default TypeParam
