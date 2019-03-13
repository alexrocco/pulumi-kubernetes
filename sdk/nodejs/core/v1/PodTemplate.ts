// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * PodTemplate describes a template for creating copies of a predefined pod.
     */
    export class PodTemplate extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"v1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"PodTemplate">;

      /**
       * Standard object's metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ObjectMeta>;

      /**
       * Template defines the pods that will be created from this pod template.
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
       */
      public readonly template: pulumi.Output<outputApi.core.v1.PodTemplateSpec>;

      /**
       * Get the state of an existing `PodTemplate` resource, as identified by `id`.
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
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PodTemplate {
          return new PodTemplate(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.core.v1.PodTemplate { return this.__inputs; }
      private readonly __inputs: inputApi.core.v1.PodTemplate;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.core.v1.PodTemplate> {
        return ctx.list({...args, type: "kubernetes:core/v1:PodTemplate",});
      }

      /**
       * Create a core.v1.PodTemplate resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.core.v1.PodTemplate, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "v1";
          inputs["kind"] = "PodTemplate";
          inputs["metadata"] = args && args.metadata || undefined;
          inputs["template"] = args && args.template || undefined;
          super("kubernetes:core/v1:PodTemplate", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
