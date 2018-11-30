import pulumi
import pulumi.runtime

from ... import tables

class AuditSink(pulumi.CustomResource):
    """
    AuditSink represents a cluster level audit sink
    """
    def __init__(self, __name__, __opts__=None, metadata=None, spec=None):
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'auditregistration.k8s.io/v1alpha1'
        __props__['kind'] = 'AuditSink'
        __props__['metadata'] = metadata
        __props__['spec'] = spec

        super(AuditSink, self).__init__(
            "kubernetes:auditregistration.k8s.io/v1alpha1:AuditSink",
            __name__,
            __props__,
            __opts__)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
