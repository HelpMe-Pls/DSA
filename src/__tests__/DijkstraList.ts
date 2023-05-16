import dijkstra_list from "@code/DijkstraList";
import { list1 } from "./graph";

test("dijkstra via adj list", function () {
    expect(dijkstra_list(0, 6, list1)).toEqual([0, 1, 4, 5, 6]);
});
