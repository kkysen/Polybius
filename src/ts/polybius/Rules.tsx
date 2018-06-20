import * as React from "react";
import {Component, ReactNode, SFC} from "react";
import * as ReactDOM from "react-dom";
import {anyWindow} from "../util/anyWindow";
import {Repeat} from "../util/components/Repeat";
import {Routers, RouterType} from "./Router";
import {RouterRule} from "./RouterRule";
import {storage} from "./Storage";

interface RouterTypesDropdownProps {
    
    readonly current: RouterType;
    
}

class RouterTypesDropdown extends Component<RouterTypesDropdownProps, {}> {
    
    // private readonly ref: NotNullRef<HTMLDivElement> = createNotNullRef();
    
    public componentDidMount(): void {
        // const elements = document.querySelectorAll(".dropdown-trigger");
        // M.Dropdown.init(elements, {});
    }
    
    public render(): ReactNode {
        return <select style={{display: "block"}}>
            {Routers.map(({type, displayName}) =>
                <option key={type} value={type} selected={this.props.current === type}>{displayName}</option>)
            }
        </select>;
    }
    
}


const Rule: SFC<{rule: RouterRule}> = ({rule: {enabled, test, route, type}}) => {
    return <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Test</th>
                <th>Destination Directory</th>
                <th>Enabled</th>
            </tr>
        </thead>
        
        <tbody>
            <tr>
                <td>
                    <RouterTypesDropdown current={type}/>
                </td>
                <td>
                    <input defaultValue={test} id="test" type="text" className="validate"/>
                    <label htmlFor="test"/>
                </td>
                <td>
                    <input defaultValue={route.toString()} id="destdir" type="text" className="validate"/>
                    <label htmlFor="destdir"/>
                </td>
                <td>
                    <input defaultValue={enabled.toString()} id="enabled" type="text" className="validate"/>
                    <label htmlFor="enabled"/>
                </td>
            </tr>
        </tbody>
    </table>;
};


const ExistingRules: SFC<{rules: RouterRule[]}> = ({rules}) => {
    return <div>
        {rules.map((rule, i) => <Rule key={i} rule={rule}/>)}
    </div>;
};

interface RulesState {
    
    readonly rules: RouterRule[];
    
}


class Rules extends Component<{}, RulesState> {
    
    // not true
    // noinspection TypeScriptFieldCanBeMadeReadonly
    private rules: RouterRule[] = [];
    
    public constructor(props: {}) {
        super(props);
        (async () => {
            this.rules = await storage.routerRules.get();
            this.forceUpdate();
        })();
    }
    
    public render(): ReactNode {
        // TODO <div> cannot be a child of <table>
        return <div>
            <table>
                
                <ExistingRules rules={this.rules}/>
                <tr>
                    <td><input type="text" name="destination" defaultValue="~/"/></td>
                    <td><input type="text" name="firstname" defaultValue=""/></td>
                    <td><input type="text" name="extension" defaultValue=""/></td>
                </tr>
            </table>
            
            <Repeat times={5} render={() => <br/>}/>
            
            <a href="http://www.freepngimg.com/download/facebook/1-2-facebook-download-png.png" download
               style={{fontSize: "larger", margin: 100}}>PNG</a>
            
            <Repeat times={5} render={() => <br/>}/>
            
            <a href="http://www.pdf995.com/samples/pdf.pdf" download style={{fontSize: "larger", margin: 100}}>PDF</a>
            
            <Repeat times={5} render={() => <br/>}/>
            
            <a href="https://github.com/kkysen/Polybius/raw/master/src/img/logo.png" download
               style={{fontSize: "larger", margin: 100}}>Logo</a>
            
            <Repeat times={5} render={() => <br/>}/>
            
            <a href="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg" download
               style={{fontSize: "larger", margin: 100}}>Google</a>
            
            <Repeat times={5} render={() => <br/>}/>
        
        </div>;
    }
    
}

export const reactMain = function(): void {
    const root = document.body.appendDiv();
    anyWindow.root = root;
    ReactDOM.render(<Rules/>, root);
};