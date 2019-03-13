// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * APIServiceList is a list of APIService objects.
     */
    export class APIServiceList extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"apiregistration.k8s.io/v1">;

      
      public readonly items: pulumi.Output<outputApi.apiregistration.v1.APIService[]>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"APIServiceList">;

      
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ListMeta>;

      /**
       * Get the state of an existing `APIServiceList` resource, as identified by `id`.
       * Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
       * Kubernetes convention) the ID becomes default/<name>.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form
       *  <namespace>/<name> or <name>.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): APIServiceList {
          return new APIServiceList(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.apiregistration.v1.APIServiceList { return this.__inputs; }
      private readonly __inputs: inputApi.apiregistration.v1.APIServiceList;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.apiregistration.v1.APIServiceList> {
        return ctx.list({...args, type: "kubernetes:apiregistration/v1:APIServiceList",});
      }

      /**
       * Create a apiregistration.v1.APIServiceList resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.apiregistration.v1.APIServiceList, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "apiregistration.k8s.io/v1";
          inputs["items"] = args && args.items || undefined;
          inputs["kind"] = "APIServiceList";
          inputs["metadata"] = args && args.metadata || undefined;
          super("kubernetes:apiregistration/v1:APIServiceList", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
