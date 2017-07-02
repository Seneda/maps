import json
from os.path import join, abspath, dirname
"""
Convert locations.json into a usable format that can be read in as a javascript script.
"""
basedir = abspath(join(dirname(__file__), ".."))

locations = json.load(open(join(basedir, "gpsdata/locations.json")))


def make_marker(location):
    # Convert the maps location entry to a simpler format
    r = {
            'lat': location["latitudeE7"]*1e-7,
            'lng': location["longitudeE7"]*1e-7,
            'time': location["timestampMs"]
        }
    return r

markers = [make_marker(l) for l in locations[27500:39600]]  # Choose a specific subset of my locations.json data
print("{} Markers created".format(len(markers)))

# Save the markers into a file
filename = join(basedir, "markers","markers.js")
open(filename, "w")
file = open(filename, "a")
file.write("var markers = ")
json.dump(markers, file, indent=4)

