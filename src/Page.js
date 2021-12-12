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
import styles from './Page.module.css'

import React, {Component} from 'react';
import {Row} from "reactstrap";

import Class from "./Class";
import Definition from "./Definition";
import Enum from "./Enum";
import TypeAlias from "./TypeAlias";

class Page extends Component {

    getNameSpace() {
        return <h1 className="display-2">{this.props.namespace}</h1>
    }

    getClasses() {
        let decls = this.props.classes;
        if (decls === undefined || decls.length === 0) {
            return undefined
        }

        return <Row className="mb-5">
            <h2 className="mb-4">Classes</h2>
            {decls.map(decl =>
                <Class key={decl.sym.name} activeRef={this.props.activeRef} decl={decl}/>)
            }
        </Row>
    }

    getEnums() {
        let decls = this.props.enums;
        if (decls === undefined || decls.length === 0) {
            return undefined
        }

        return <Row className="mb-5">
            <h2 className="mb-4">Enums</h2>
            {decls.map(decl =>
                <Enum key={decl.sym.name} activeRef={this.props.activeRef} decl={decl}/>)
            }
        </Row>
    }

    getTypeAliases() {
        let decls = this.props.typeAliases
        if (decls === undefined || decls.length === 0) {
            return undefined
        }

        return <Row className="mb-5">
            <h2 className="mb-4">Type Aliases</h2>
            {decls.map(decl =>
                <TypeAlias key={decl.sym.name} activeRef={this.props.activeRef} decl={decl}/>)
            }
        </Row>
    }

    getDefs() {
        let decls = this.props.defs
        if (decls === undefined || decls.length === 0) {
            return undefined
        }

        return <Row className="mb-5">
            <h2 className="mb-4">Definitions</h2>
            {decls.map(decl =>
                <Definition key={decl.sym.name} activeRef={this.props.activeRef} decl={decl}/>)
            }
        </Row>
    }

    componentDidUpdate() {
        ///
        /// Scroll to the top (if no activeRef)
        ///
        if (this.props.activeRef === undefined) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return
        }

        //
        // Scroll to the clicked declaration (if any).
        //
        if (this.props.activeRef) {
            this.props.activeRef.current.scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }
    }

    render() {
        return (
            <div className={styles.page}>
                {this.getNameSpace()}
                <hr className="mt-3 mb-5"/>
                {this.getClasses()}
                {this.getEnums()}
                {this.getTypeAliases()}
                {this.getDefs()}
            </div>
        );
    }
}

export default Page;
