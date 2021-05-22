/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/policyExemptionsMappers";
import * as Parameters from "../models/parameters";
import { PolicyClientContext } from "../policyClientContext";

/** Class representing a PolicyExemptions. */
export class PolicyExemptions {
  private readonly client: PolicyClientContext;

  /**
   * Create a PolicyExemptions.
   * @param {PolicyClientContext} client Reference to the service client.
   */
  constructor(client: PolicyClientContext) {
    this.client = client;
  }

  /**
   * This operation deletes a policy exemption, given its name and the scope it was created in. The
   * scope of a policy exemption is the part of its ID preceding
   * '/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}'.
   * @summary Deletes a policy exemption.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(
    scope: string,
    policyExemptionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<msRest.RestResponse>;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param callback The callback
   */
  deleteMethod(
    scope: string,
    policyExemptionName: string,
    callback: msRest.ServiceCallback<void>
  ): void;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(
    scope: string,
    policyExemptionName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<void>
  ): void;
  deleteMethod(
    scope: string,
    policyExemptionName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>,
    callback?: msRest.ServiceCallback<void>
  ): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        policyExemptionName,
        options
      },
      deleteMethodOperationSpec,
      callback
    );
  }

  /**
   * This operation creates or updates a policy exemption with the given scope and name. Policy
   * exemptions apply to all resources contained within their scope. For example, when you create a
   * policy exemption at resource group scope for a policy assignment at the same or above level, the
   * exemption exempts to all applicable resources in the resource group.
   * @summary Creates or updates a policy exemption.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param parameters Parameters for the policy exemption.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsCreateOrUpdateResponse>
   */
  createOrUpdate(
    scope: string,
    policyExemptionName: string,
    parameters: Models.PolicyExemption,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PolicyExemptionsCreateOrUpdateResponse>;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param parameters Parameters for the policy exemption.
   * @param callback The callback
   */
  createOrUpdate(
    scope: string,
    policyExemptionName: string,
    parameters: Models.PolicyExemption,
    callback: msRest.ServiceCallback<Models.PolicyExemption>
  ): void;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param parameters Parameters for the policy exemption.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(
    scope: string,
    policyExemptionName: string,
    parameters: Models.PolicyExemption,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.PolicyExemption>
  ): void;
  createOrUpdate(
    scope: string,
    policyExemptionName: string,
    parameters: Models.PolicyExemption,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyExemption>,
    callback?: msRest.ServiceCallback<Models.PolicyExemption>
  ): Promise<Models.PolicyExemptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        policyExemptionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsCreateOrUpdateResponse>;
  }

  /**
   * This operation retrieves a single policy exemption, given its name and the scope it was created
   * at.
   * @summary Retrieves a policy exemption.
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsGetResponse>
   */
  get(
    scope: string,
    policyExemptionName: string,
    options?: msRest.RequestOptionsBase
  ): Promise<Models.PolicyExemptionsGetResponse>;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param callback The callback
   */
  get(
    scope: string,
    policyExemptionName: string,
    callback: msRest.ServiceCallback<Models.PolicyExemption>
  ): void;
  /**
   * @param scope The scope of the policy exemption. Valid scopes are: management group (format:
   * '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   * '/subscriptions/{subscriptionId}'), resource group (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param policyExemptionName The name of the policy exemption to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(
    scope: string,
    policyExemptionName: string,
    options: msRest.RequestOptionsBase,
    callback: msRest.ServiceCallback<Models.PolicyExemption>
  ): void;
  get(
    scope: string,
    policyExemptionName: string,
    options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PolicyExemption>,
    callback?: msRest.ServiceCallback<Models.PolicyExemption>
  ): Promise<Models.PolicyExemptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        policyExemptionName,
        options
      },
      getOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsGetResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given
   * subscription that match the optional given $filter. Valid values for $filter are: 'atScope()',
   * 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter is not
   * provided, the unfiltered list includes all policy exemptions associated with the subscription,
   * including those that apply directly or from management groups that contain the given
   * subscription, as well as any applied to objects contained within the subscription.
   * @summary Retrieves all policy exemptions that apply to a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListResponse>
   */
  list(
    options?: Models.PolicyExemptionsListOptionalParams
  ): Promise<Models.PolicyExemptionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(
    options: Models.PolicyExemptionsListOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  list(
    options?:
      | Models.PolicyExemptionsListOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given resource
   * group in the given subscription that match the optional given $filter. Valid values for $filter
   * are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If
   * $filter is not provided, the unfiltered list includes all policy exemptions associated with the
   * resource group, including those that apply directly or apply from containing scopes, as well as
   * any applied to resources contained within the resource group.
   * @summary Retrieves all policy exemptions that apply to a resource group.
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForResourceGroupResponse>
   */
  listForResourceGroup(
    resourceGroupName: string,
    options?: Models.PolicyExemptionsListForResourceGroupOptionalParams
  ): Promise<Models.PolicyExemptionsListForResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param callback The callback
   */
  listForResourceGroup(
    resourceGroupName: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroup(
    resourceGroupName: string,
    options: Models.PolicyExemptionsListForResourceGroupOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForResourceGroup(
    resourceGroupName: string,
    options?:
      | Models.PolicyExemptionsListForResourceGroupOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listForResourceGroupOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForResourceGroupResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the specified
   * resource in the given resource group and subscription that match the optional given $filter.
   * Valid values for $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or
   * 'policyAssignmentId eq '{value}''. If $filter is not provided, the unfiltered list includes all
   * policy exemptions associated with the resource, including those that apply directly or from all
   * containing scopes, as well as any applied to resources contained within the resource. Three
   * parameters plus the resource name are used to identify a specific resource. If the resource is
   * not part of a parent resource (the more common case), the parent resource path should not be
   * provided (or provided as ''). For example a web app could be specified as
   * ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} ==
   * 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all
   * parameters should be provided. For example a virtual machine DNS name could be specified as
   * ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} ==
   * 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} ==
   * 'MyComputerName'). A convenient alternative to providing the namespace and type name separately
   * is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '',
   * {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} ==
   * 'MyWebApp').
   * @summary Retrieves all policy exemptions that apply to a resource.
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the
   * namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites'
   * (from Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForResourceResponse>
   */
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: Models.PolicyExemptionsListForResourceOptionalParams
  ): Promise<Models.PolicyExemptionsListForResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the
   * namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites'
   * (from Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param callback The callback
   */
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param resourceGroupName The name of the resource group containing the resource.
   * @param resourceProviderNamespace The namespace of the resource provider. For example, the
   * namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
   * @param parentResourcePath The parent resource path. Use empty string if there is none.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites'
   * (from Microsoft.Web/sites).
   * @param resourceName The name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options: Models.PolicyExemptionsListForResourceOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?:
      | Models.PolicyExemptionsListForResourceOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      },
      listForResourceOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForResourceResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions applicable to the management group
   * that match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the
   * returned list includes all policy exemptions that are assigned to the management group or the
   * management group's ancestors.
   * @summary Retrieves all policy exemptions that apply to a management group.
   * @param managementGroupId The ID of the management group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForManagementGroupResponse>
   */
  listForManagementGroup(
    managementGroupId: string,
    options?: Models.PolicyExemptionsListForManagementGroupOptionalParams
  ): Promise<Models.PolicyExemptionsListForManagementGroupResponse>;
  /**
   * @param managementGroupId The ID of the management group.
   * @param callback The callback
   */
  listForManagementGroup(
    managementGroupId: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param managementGroupId The ID of the management group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForManagementGroup(
    managementGroupId: string,
    options: Models.PolicyExemptionsListForManagementGroupOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForManagementGroup(
    managementGroupId: string,
    options?:
      | Models.PolicyExemptionsListForManagementGroupOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        options
      },
      listForManagementGroupOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForManagementGroupResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given
   * subscription that match the optional given $filter. Valid values for $filter are: 'atScope()',
   * 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter is not
   * provided, the unfiltered list includes all policy exemptions associated with the subscription,
   * including those that apply directly or from management groups that contain the given
   * subscription, as well as any applied to objects contained within the subscription.
   * @summary Retrieves all policy exemptions that apply to a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListNextResponse>
   */
  listNext(
    nextPageLink: string,
    options?: Models.PolicyExemptionsListNextOptionalParams
  ): Promise<Models.PolicyExemptionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(
    nextPageLink: string,
    options: Models.PolicyExemptionsListNextOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listNext(
    nextPageLink: string,
    options?:
      | Models.PolicyExemptionsListNextOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListNextResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the given resource
   * group in the given subscription that match the optional given $filter. Valid values for $filter
   * are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If
   * $filter is not provided, the unfiltered list includes all policy exemptions associated with the
   * resource group, including those that apply directly or apply from containing scopes, as well as
   * any applied to resources contained within the resource group.
   * @summary Retrieves all policy exemptions that apply to a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForResourceGroupNextResponse>
   */
  listForResourceGroupNext(
    nextPageLink: string,
    options?: Models.PolicyExemptionsListForResourceGroupNextOptionalParams
  ): Promise<Models.PolicyExemptionsListForResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceGroupNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroupNext(
    nextPageLink: string,
    options: Models.PolicyExemptionsListForResourceGroupNextOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForResourceGroupNext(
    nextPageLink: string,
    options?:
      | Models.PolicyExemptionsListForResourceGroupNextOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceGroupNextOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForResourceGroupNextResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions associated with the specified
   * resource in the given resource group and subscription that match the optional given $filter.
   * Valid values for $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or
   * 'policyAssignmentId eq '{value}''. If $filter is not provided, the unfiltered list includes all
   * policy exemptions associated with the resource, including those that apply directly or from all
   * containing scopes, as well as any applied to resources contained within the resource. Three
   * parameters plus the resource name are used to identify a specific resource. If the resource is
   * not part of a parent resource (the more common case), the parent resource path should not be
   * provided (or provided as ''). For example a web app could be specified as
   * ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} ==
   * 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all
   * parameters should be provided. For example a virtual machine DNS name could be specified as
   * ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} ==
   * 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} ==
   * 'MyComputerName'). A convenient alternative to providing the namespace and type name separately
   * is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '',
   * {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} ==
   * 'MyWebApp').
   * @summary Retrieves all policy exemptions that apply to a resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForResourceNextResponse>
   */
  listForResourceNext(
    nextPageLink: string,
    options?: Models.PolicyExemptionsListForResourceNextOptionalParams
  ): Promise<Models.PolicyExemptionsListForResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceNext(
    nextPageLink: string,
    options: Models.PolicyExemptionsListForResourceNextOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForResourceNext(
    nextPageLink: string,
    options?:
      | Models.PolicyExemptionsListForResourceNextOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceNextOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForResourceNextResponse>;
  }

  /**
   * This operation retrieves the list of all policy exemptions applicable to the management group
   * that match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()',
   * 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the
   * returned list includes all policy exemptions that are assigned to the management group or the
   * management group's ancestors.
   * @summary Retrieves all policy exemptions that apply to a management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PolicyExemptionsListForManagementGroupNextResponse>
   */
  listForManagementGroupNext(
    nextPageLink: string,
    options?: Models.PolicyExemptionsListForManagementGroupNextOptionalParams
  ): Promise<Models.PolicyExemptionsListForManagementGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForManagementGroupNext(
    nextPageLink: string,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForManagementGroupNext(
    nextPageLink: string,
    options: Models.PolicyExemptionsListForManagementGroupNextOptionalParams,
    callback: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): void;
  listForManagementGroupNext(
    nextPageLink: string,
    options?:
      | Models.PolicyExemptionsListForManagementGroupNextOptionalParams
      | msRest.ServiceCallback<Models.PolicyExemptionListResult>,
    callback?: msRest.ServiceCallback<Models.PolicyExemptionListResult>
  ): Promise<Models.PolicyExemptionsListForManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForManagementGroupNextOperationSpec,
      callback
    ) as Promise<Models.PolicyExemptionsListForManagementGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  urlParameters: [Parameters.scope, Parameters.policyExemptionName],
  queryParameters: [Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  urlParameters: [Parameters.scope, Parameters.policyExemptionName],
  queryParameters: [Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PolicyExemption,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemption
    },
    201: {
      bodyMapper: Mappers.PolicyExemption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Authorization/policyExemptions/{policyExemptionName}",
  urlParameters: [Parameters.scope, Parameters.policyExemptionName],
  queryParameters: [Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyExemptions",
  urlParameters: [Parameters.subscriptionId],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyExemptions",
  urlParameters: [Parameters.subscriptionId, Parameters.resourceGroupName],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/policyExemptions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForManagementGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path:
    "providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/policyExemptions",
  urlParameters: [Parameters.managementGroupId],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForManagementGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [Parameters.nextPageLink],
  queryParameters: [Parameters.filter, Parameters.apiVersion1],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.PolicyExemptionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};