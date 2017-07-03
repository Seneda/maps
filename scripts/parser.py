"""
Convert locations.json into a usable format that can be read in as a javascript script.
"""
import argparse
import json
from os.path import join, abspath, dirname

parser = argparse.ArgumentParser()
parser.add_argument("-l", "--locations", help="A google maps timeline json file containing location history data", default="gpsdata/locationsUSAEdited.json")
basedir = abspath(join(dirname(__file__), ".."))
parser.add_argument("-o", "--output", help="A javascript file for the markers to be stored in.", default=join(basedir, "markers", "markers.js"))

if __name__ == '__main__':

    args = parser.parse_args()

    locations = json.load(open(join(basedir, args.locations)))

    def make_marker(location, count=[0]):
        # Convert the maps location entry to a simpler format
        r = {
                'lat': location["latitudeE7"]*1e-7,
                'lng': location["longitudeE7"]*1e-7,
                'time': location["timestampMs"],
                'index': count[0]
            }
        count[0] += 1
        return r

    markers = [make_marker(l) for l in locations]

    print("{} Markers parsed".format(len(markers)))

    # Save the markers into a file
    filename = args.output
    open(filename, "w")
    file = open(filename, "a")
    file.write("var markers = ")
    json.dump(markers, file, indent=4)

