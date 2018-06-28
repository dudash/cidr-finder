# CIDR Finder
This is a simple React demo app that let's you visualize information about CIDR addresses. It can come in handy when setting up networking in the cloud.

Here's what it looks like:

![Screenshot](./.screens/cidrfinder.gif)

## How to run this?

### Run locally
Clone this repo (optionally fork it first)
> `git clone XXX`

Install the dependencies
> `yarn`

Run
> `npm start`


### Run in OpenShift
First off, you need access to an OpenShift cluster.  Don't have an OpenShift cluster?  That's OK, download the CDK for free here: [https://developers.redhat.com/products/cdk/overview/][5].  Second you have to have [metrics enabled on your cluster][7].

Then just use the oc CLI tool:
 > `oc new-project cidr-finder `

 > `oc new-app https://github.com/dudash/cidr-finder`

## Thanks to
Thanks to the authors of [this CIDR project][2] as it served as the original inspiration for this app.

## License
Under the terms of the MIT.


[1]: https://developers.redhat.com/products/cdk/overview/
[2]: https://github.com/yuvadm/cidr.xyz