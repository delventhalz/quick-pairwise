# Quick-Pairwise

_A web app to make pairwise comparisons using a faster quick-pairwise algorithm_

A typical pairwise ranking algorithm involves comparing every single
option to every other single option. This is O(n^2) for the number of
comparisons a user has to make and can get ludicrous pretty quickly.
This is a pretty straightforward replacement, which uses a binary
algorithm to figure out where to insert a new option in an ongoing
sorted list. Although it requires considerably fewer comparisons with
long lists, this approach does have a couple of downsides:

- You have to repeatedly look at the same option until it is ranked
- Humans are weird, just because we like a new option better than
  something else we ranked highly doesn't mean we wouldn't like it worse
  than something lower ranked, but with this approach you'll never make
  that comparison

In the future I will add the option to use the more traditional
algorithm, add some UI improvements, maybe host somewhere, but for now
it works and you can run it with `npm start`.