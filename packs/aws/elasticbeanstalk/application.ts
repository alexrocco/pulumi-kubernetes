// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Application extends lumi.NamedResource implements ApplicationArgs {
    public readonly description?: string;

    constructor(name: string, args: ApplicationArgs) {
        super(name);
        this.description = args.description;
    }
}

export interface ApplicationArgs {
    readonly description?: string;
}
