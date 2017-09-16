import * as React from "react";
import { Observable, Subscription } from 'rxjs';

export type Injector<ComponentProps, ParentProps> = (
    Component: React.ComponentClass<ComponentProps>
) => React.ComponentClass<ParentProps>;

export type PropsType<ComponentProps, StoreProps, ParentProps> = (
    store: StoreProps,
    upstream: ParentProps
) => ComponentProps;

export default function<ComponentProps, StoreProps, ParentProps>(
    store: Observable<StoreProps>,
    props: PropsType<ComponentProps, StoreProps, ParentProps>
): Injector<ComponentProps, ParentProps> {
    return (Component: React.ComponentClass<ComponentProps>) => {
        type State = { store: StoreProps };
        class Inject extends React.Component<ParentProps, State> {
            state: State;
            subscription: Subscription;

            componentDidMount() {
                this.subscription = store.subscribe(storeProps => {
                    this.setState({ store: storeProps });
                });
            }

            componentWillUnmount() {
                this.subscription.unsubscribe();
            }

            render() {
                if (!this.state) {
                    return null;
                }
                const customProps = typeof props === 'function' ? props(this.state.store, this.props) : props;
                return <Component {...customProps} />;
            }
        }
        return Inject;
    };
}