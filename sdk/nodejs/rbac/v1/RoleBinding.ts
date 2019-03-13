// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";
import * as rxjs from "rxjs";
import * as operators from "rxjs/operators"

    /**
     * RoleBinding references a role, but does not contain it.  It can reference a Role in the same
     * namespace or a ClusterRole in the global namespace. It adds who information via Subjects and
     * namespace information by which namespace it exists in.  RoleBindings in a given namespace
     * only have effect in that namespace.
     */
    export class RoleBinding extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"rbac.authorization.k8s.io/v1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"RoleBinding">;

      /**
       * Standard object's metadata.
       */
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ObjectMeta>;

      /**
       * RoleRef can reference a Role in the current namespace or a ClusterRole in the global
       * namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
       */
      public readonly roleRef: pulumi.Output<outputApi.rbac.v1.RoleRef>;

      /**
       * Subjects holds references to the objects the role applies to.
       */
      public readonly subjects: pulumi.Output<outputApi.rbac.v1.Subject[]>;

      /**
       * Get the state of an existing `RoleBinding` resource, as identified by `id`.
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
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RoleBinding {
          return new RoleBinding(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.rbac.v1.RoleBinding { return this.__inputs; }
      private readonly __inputs: inputApi.rbac.v1.RoleBinding;

      public static list(
        ctx: pulumi.query.ListContext,
        args?: pulumi.query.ListArgs,
      ): rxjs.Observable<outputApi.rbac.v1.RoleBinding> {
        return ctx.list({...args, type: "kubernetes:rbac.authorization.k8s.io/v1:RoleBinding",});
      }

      public static addAdmissionPolicy(policy: pulumi.policy.AdmissionPolicy): void {
        pulumi.runtime.addAdmissionPolicy({
          ...policy,
          pulumiType: "kubernetes:rbac.authorization.k8s.io/v1:RoleBinding",
        });
      }

      /**
       * Create a rbac.v1.RoleBinding resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.rbac.v1.RoleBinding, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "rbac.authorization.k8s.io/v1";
          inputs["kind"] = "RoleBinding";
          inputs["metadata"] = args && args.metadata || undefined;
          inputs["roleRef"] = args && args.roleRef || undefined;
          inputs["subjects"] = args && args.subjects || undefined;
          super("kubernetes:rbac.authorization.k8s.io/v1:RoleBinding", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
