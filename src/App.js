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
import './App.css';

import React, {Component} from 'react';
import Menu from "./Menu";
import Page from "./Page";

import data from "./Data";

class App extends Component {

    constructor(props) {
        super(props);

        // Add react refs everywhere.
        for (const decls of Object.values(data.classes)) {
            for (const decl of decls) {
                decl.reactRef = React.createRef()
            }
        }
        for (const decls of Object.values(data.enums)) {
            for (const decl of decls) {
                decl.reactRef = React.createRef()
            }
        }
        for (const decls of Object.values(data.typeAliases)) {
            for (const decl of decls) {
                decl.reactRef = React.createRef()
            }
        }
        for (const decls of Object.values(data.defs)) {
            for (const decl of decls) {
                decl.reactRef = React.createRef()
            }
        }

        // The default namespace
        let defaultNameSpace = "Prelude"

        // Check if there is a hash.
        let hash = window.location.hash
        if (hash) {
            defaultNameSpace = hash.substr(1)
        }

        // The initial state.
        this.state = {
            namespace: defaultNameSpace,
            activeRef: undefined
        }
    }

    notifyChangeNameSpace(namespace, activeRef) {
        this.setState({
            "namespace": namespace,
            activeRef: activeRef
        })
        if(window.history.pushState) {
            window.history.pushState(null, null, '#' + namespace);
        }
    }

    getClasses() {
        return data.classes[this.state.namespace] || [];
    }

    getEnums() {
        return data.enums[this.state.namespace] || [];
    }

    getTypeAliases() {
        return data.typeAliases[this.state.namespace] || [];
    }

    getDefs() {
        return data.defs[this.state.namespace] || [];
    }

    render() {
        return (
            <div className="App">
                <Menu
                    data={data}
                    namespaces={data.namespaces}
                    notifyChangeNameSpace={this.notifyChangeNameSpace.bind(this)}/>

                <Page
                    namespace={this.state.namespace}
                    activeRef={this.state.activeRef}
                    classes={this.getClasses()}
                    enums={this.getEnums()}
                    typeAliases={this.getTypeAliases()}
                    defs={this.getDefs()}
                />
            </div>
        );
    }
}

export default App;
