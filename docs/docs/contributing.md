# Contributing

Interested in contributing to the harmony boilerplate? Want to report a bug? Before
you do, please read the following guidelines.

## Submission context

### Found a bug?

If you found a bug in the source code, you can help us by submitting an issue
to the [issue tracker][2] in our GitHub repository. Even better, you can submit
a Pull Request with a fix. However, before doing so, please read the
[submission guidelines][3].

  [2]: https://github.com/harmony-framework/harmony-react-nativeboilerplate/issues
  [3]: #submission-guidelines

### Missing a feature?

You can request a new feature by submitting an issue to our GitHub Repository.
If you would like to implement a new feature, please submit an issue with a
proposal for your work first, to be sure that it is of use for everyone, as
the Material theme is highly opinionated. Please consider what kind of change
it is:

* For a **major feature**, first open an issue and outline your proposal so
  that it can be discussed. This will also allow us to better coordinate our
  efforts, prevent duplication of work, and help you to craft the change so
  that it is successfully accepted into the project.

* **Small features and bugs** can be crafted and directly submitted as a Pull
  Request. However, there is no guarantee that your feature will make it into
  the master, as it's always a matter of opinion whether if benefits the
  overall functionality of the theme.

## Submission guidelines

### Submitting an issue

Before you submit an issue, please search the issue tracker, maybe an issue for
your problem already exists and the discussion might inform you of workarounds
readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we
need to reproduce and confirm it. In order to reproduce bugs we will
systematically ask you to provide a minimal reproduction scenario using the
custom issue template. Please stick to the issue template.

Unfortunately we are not able to investigate / fix bugs without a minimal
reproduction scenario, so if we don't hear back from you we may close the issue.

### Submitting a Pull Request (PR)

Search GitHub for an open or closed PR that relates to your submission. You
don't want to duplicate effort. If you do not find a related issue or PR,
go ahead.

1. **Development**: Fork the project, set up development environment,
  make your changes in a separate git branch and add descriptive messages to
  your commits.

2. **Build**: Before submitting a pull requests, build the boilerplate ( dev and prod ). This is a
  mandatory requirement for your PR to get accepted, as the boilerplate should at
  all times be installable through GitHub.

3. **Pull Request**: After building the boilerplate, commit the changes, push
  your branch to GitHub and send a PR to `harmony-react-native-boilerplate:master`. If we
  suggest changes, make the required updates, rebase your branch and push the
  changes to your GitHub repository, which will automatically update your PR.

After your PR is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository.


