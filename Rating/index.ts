import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { Ratings, RatingProps } from "./Rating";
import * as React from "react";

export class Rating implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;
    private ratingValue: number; 

    constructor() {
        this.ratingValue = 0; 
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        const ratingvalue=context.parameters.Ratingvalue.raw||0;
        this.ratingValue=ratingvalue;
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        return React.createElement(
            Ratings,
            {
                ratingvalue: this.ratingValue, 
                onRatingChange: (rating: number) => {
                    this.ratingValue = rating; 
                    this.notifyOutputChanged(); // notify the framework that the output has changed
                }
            }
        );
    }

    public getOutputs(): IOutputs {
        return { Ratingvalue: this.ratingValue }; 
    }

    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
